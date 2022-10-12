import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_metaWhereInput } from '../move-meta/move-meta-where.input';

@InputType()
export class Move_metaListRelationFilter {

    @Field(() => move_metaWhereInput, {nullable:true})
    every?: move_metaWhereInput;

    @Field(() => move_metaWhereInput, {nullable:true})
    some?: move_metaWhereInput;

    @Field(() => move_metaWhereInput, {nullable:true})
    none?: move_metaWhereInput;
}
