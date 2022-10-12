import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flavor_textWhereInput } from '../move-flavor-text/move-flavor-text-where.input';

@InputType()
export class Move_flavor_textListRelationFilter {

    @Field(() => move_flavor_textWhereInput, {nullable:true})
    every?: move_flavor_textWhereInput;

    @Field(() => move_flavor_textWhereInput, {nullable:true})
    some?: move_flavor_textWhereInput;

    @Field(() => move_flavor_textWhereInput, {nullable:true})
    none?: move_flavor_textWhereInput;
}
