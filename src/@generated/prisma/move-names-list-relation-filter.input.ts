import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_namesWhereInput } from '../move-names/move-names-where.input';

@InputType()
export class Move_namesListRelationFilter {

    @Field(() => move_namesWhereInput, {nullable:true})
    every?: move_namesWhereInput;

    @Field(() => move_namesWhereInput, {nullable:true})
    some?: move_namesWhereInput;

    @Field(() => move_namesWhereInput, {nullable:true})
    none?: move_namesWhereInput;
}
