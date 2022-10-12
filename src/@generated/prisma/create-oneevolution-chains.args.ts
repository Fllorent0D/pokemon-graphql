import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { evolution_chainsCreateInput } from '../evolution-chains/evolution-chains-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneevolutionChainsArgs {

    @Field(() => evolution_chainsCreateInput, {nullable:false})
    @Type(() => evolution_chainsCreateInput)
    data!: evolution_chainsCreateInput;
}
