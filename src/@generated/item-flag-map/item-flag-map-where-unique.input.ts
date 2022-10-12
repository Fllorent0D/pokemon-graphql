import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flag_mapItem_idItem_flag_idCompoundUniqueInput } from './item-flag-map-item-id-item-flag-id-compound-unique.input';

@InputType()
export class item_flag_mapWhereUniqueInput {

    @Field(() => item_flag_mapItem_idItem_flag_idCompoundUniqueInput, {nullable:true})
    item_id_item_flag_id?: item_flag_mapItem_idItem_flag_idCompoundUniqueInput;
}
