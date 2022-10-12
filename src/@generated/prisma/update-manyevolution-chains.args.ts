import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { evolution_chainsUncheckedUpdateManyInput } from '../evolution-chains/evolution-chains-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { evolution_chainsWhereInput } from '../evolution-chains/evolution-chains-where.input';

@ArgsType()
export class UpdateManyevolutionChainsArgs {

    @Field(() => evolution_chainsUncheckedUpdateManyInput, {nullable:false})
    @Type(() => evolution_chainsUncheckedUpdateManyInput)
    data!: evolution_chainsUncheckedUpdateManyInput;

    @Field(() => evolution_chainsWhereInput, {nullable:true})
    @Type(() => evolution_chainsWhereInput)
    where?: evolution_chainsWhereInput;
}
