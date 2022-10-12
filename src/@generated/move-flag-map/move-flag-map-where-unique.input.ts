import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flag_mapMove_idMove_flag_idCompoundUniqueInput } from './move-flag-map-move-id-move-flag-id-compound-unique.input';

@InputType()
export class move_flag_mapWhereUniqueInput {

    @Field(() => move_flag_mapMove_idMove_flag_idCompoundUniqueInput, {nullable:true})
    move_id_move_flag_id?: move_flag_mapMove_idMove_flag_idCompoundUniqueInput;
}
