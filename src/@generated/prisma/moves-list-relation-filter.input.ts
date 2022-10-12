import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { movesWhereInput } from '../moves/moves-where.input';

@InputType()
export class MovesListRelationFilter {

    @Field(() => movesWhereInput, {nullable:true})
    every?: movesWhereInput;

    @Field(() => movesWhereInput, {nullable:true})
    some?: movesWhereInput;

    @Field(() => movesWhereInput, {nullable:true})
    none?: movesWhereInput;
}
