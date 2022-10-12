import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { evolution_chainsWhereInput } from '../evolution-chains/evolution-chains-where.input';

@InputType()
export class Evolution_chainsRelationFilter {

    @Field(() => evolution_chainsWhereInput, {nullable:true})
    is?: evolution_chainsWhereInput;

    @Field(() => evolution_chainsWhereInput, {nullable:true})
    isNot?: evolution_chainsWhereInput;
}
