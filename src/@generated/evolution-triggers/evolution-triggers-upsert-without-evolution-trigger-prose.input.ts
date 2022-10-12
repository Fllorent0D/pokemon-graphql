import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { evolution_triggersUpdateWithoutEvolution_trigger_proseInput } from './evolution-triggers-update-without-evolution-trigger-prose.input';
import { Type } from 'class-transformer';
import { evolution_triggersCreateWithoutEvolution_trigger_proseInput } from './evolution-triggers-create-without-evolution-trigger-prose.input';

@InputType()
export class evolution_triggersUpsertWithoutEvolution_trigger_proseInput {

    @Field(() => evolution_triggersUpdateWithoutEvolution_trigger_proseInput, {nullable:false})
    @Type(() => evolution_triggersUpdateWithoutEvolution_trigger_proseInput)
    update!: evolution_triggersUpdateWithoutEvolution_trigger_proseInput;

    @Field(() => evolution_triggersCreateWithoutEvolution_trigger_proseInput, {nullable:false})
    @Type(() => evolution_triggersCreateWithoutEvolution_trigger_proseInput)
    create!: evolution_triggersCreateWithoutEvolution_trigger_proseInput;
}
