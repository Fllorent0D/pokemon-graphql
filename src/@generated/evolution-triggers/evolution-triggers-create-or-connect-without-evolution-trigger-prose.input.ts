import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { evolution_triggersWhereUniqueInput } from './evolution-triggers-where-unique.input';
import { Type } from 'class-transformer';
import { evolution_triggersCreateWithoutEvolution_trigger_proseInput } from './evolution-triggers-create-without-evolution-trigger-prose.input';

@InputType()
export class evolution_triggersCreateOrConnectWithoutEvolution_trigger_proseInput {

    @Field(() => evolution_triggersWhereUniqueInput, {nullable:false})
    @Type(() => evolution_triggersWhereUniqueInput)
    where!: evolution_triggersWhereUniqueInput;

    @Field(() => evolution_triggersCreateWithoutEvolution_trigger_proseInput, {nullable:false})
    @Type(() => evolution_triggersCreateWithoutEvolution_trigger_proseInput)
    create!: evolution_triggersCreateWithoutEvolution_trigger_proseInput;
}
