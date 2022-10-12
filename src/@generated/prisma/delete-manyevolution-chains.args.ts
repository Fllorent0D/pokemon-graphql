import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { evolution_chainsWhereInput } from '../evolution-chains/evolution-chains-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyevolutionChainsArgs {

    @Field(() => evolution_chainsWhereInput, {nullable:true})
    @Type(() => evolution_chainsWhereInput)
    where?: evolution_chainsWhereInput;
}
