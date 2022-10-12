import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { evolution_chainsWhereUniqueInput } from '../evolution-chains/evolution-chains-where-unique.input';
import { Type } from 'class-transformer';
import { evolution_chainsCreateInput } from '../evolution-chains/evolution-chains-create.input';
import { evolution_chainsUpdateInput } from '../evolution-chains/evolution-chains-update.input';

@ArgsType()
export class UpsertOneevolutionChainsArgs {

    @Field(() => evolution_chainsWhereUniqueInput, {nullable:false})
    @Type(() => evolution_chainsWhereUniqueInput)
    where!: evolution_chainsWhereUniqueInput;

    @Field(() => evolution_chainsCreateInput, {nullable:false})
    @Type(() => evolution_chainsCreateInput)
    create!: evolution_chainsCreateInput;

    @Field(() => evolution_chainsUpdateInput, {nullable:false})
    @Type(() => evolution_chainsUpdateInput)
    update!: evolution_chainsUpdateInput;
}
