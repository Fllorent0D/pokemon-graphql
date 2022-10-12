import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { evolution_chainsUpdateInput } from '../evolution-chains/evolution-chains-update.input';
import { Type } from 'class-transformer';
import { evolution_chainsWhereUniqueInput } from '../evolution-chains/evolution-chains-where-unique.input';

@ArgsType()
export class UpdateOneevolutionChainsArgs {

    @Field(() => evolution_chainsUpdateInput, {nullable:false})
    @Type(() => evolution_chainsUpdateInput)
    data!: evolution_chainsUpdateInput;

    @Field(() => evolution_chainsWhereUniqueInput, {nullable:false})
    @Type(() => evolution_chainsWhereUniqueInput)
    where!: evolution_chainsWhereUniqueInput;
}
