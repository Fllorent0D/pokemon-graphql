import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flag_mapWhereInput } from '../move-flag-map/move-flag-map-where.input';

@InputType()
export class Move_flag_mapListRelationFilter {

    @Field(() => move_flag_mapWhereInput, {nullable:true})
    every?: move_flag_mapWhereInput;

    @Field(() => move_flag_mapWhereInput, {nullable:true})
    some?: move_flag_mapWhereInput;

    @Field(() => move_flag_mapWhereInput, {nullable:true})
    none?: move_flag_mapWhereInput;
}
