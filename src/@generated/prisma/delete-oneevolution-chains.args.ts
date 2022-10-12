import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { evolution_chainsWhereUniqueInput } from '../evolution-chains/evolution-chains-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneevolutionChainsArgs {

    @Field(() => evolution_chainsWhereUniqueInput, {nullable:false})
    @Type(() => evolution_chainsWhereUniqueInput)
    where!: evolution_chainsWhereUniqueInput;
}
