import styles from '../../styles/Text.module.css'

const Infor = () => (
  <div className="page">
      <h1><strong>Informações</strong></h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut est euismod, iaculis ante efficitur, sodales
        nisl. Nulla non orci vitae nibh ullamcorper finibus. Morbi a nisl tempor, sodales ex quis, aliquet neque. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    <div className={styles.padding}>
       <form>
        <h1><strong>Seleção Item</strong></h1>
        <label>
          Escolha seu sabor favorito:
          <div>
            <select>
              <option value="laranja">Laranja</option>
              <option value="limao">Limão</option>
              <option value="coco">Coco</option>
              <option value="manga">Manga</option>
            </select>
          </div>
        </label>
      </form>  
    </div>
  </div>
)
export default Infor