import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { evolution_chainsWhereInput } from '../evolution-chains/evolution-chains-where.input';

@InputType()
export class Evolution_chainsListRelationFilter {

    @Field(() => evolution_chainsWhereInput, {nullable:true})
    every?: evolution_chainsWhereInput;

    @Field(() => evolution_chainsWhereInput, {nullable:true})
    some?: evolution_chainsWhereInput;

    @Field(() => evolution_chainsWhereInput, {nullable:true})
    none?: evolution_chainsWhereInput;
}
