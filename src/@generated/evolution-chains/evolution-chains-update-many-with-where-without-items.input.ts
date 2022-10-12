import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { evolution_chainsScalarWhereInput } from './evolution-chains-scalar-where.input';
import { Type } from 'class-transformer';
import { evolution_chainsUncheckedUpdateManyWithoutEvolution_chainsInput } from './evolution-chains-unchecked-update-many-without-evolution-chains.input';

@InputType()
export class evolution_chainsUpdateManyWithWhereWithoutItemsInput {

    @Field(() => evolution_chainsScalarWhereInput, {nullable:false})
    @Type(() => evolution_chainsScalarWhereInput)
    where!: evolution_chainsScalarWhereInput;

    @Field(() => evolution_chainsUncheckedUpdateManyWithoutEvolution_chainsInput, {nullable:false})
    @Type(() => evolution_chainsUncheckedUpdateManyWithoutEvolution_chainsInput)
    data!: evolution_chainsUncheckedUpdateManyWithoutEvolution_chainsInput;
}
