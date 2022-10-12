import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { evolution_trigger_proseWhereUniqueInput } from './evolution-trigger-prose-where-unique.input';
import { Type } from 'class-transformer';
import { evolution_trigger_proseUpdateWithoutEvolution_triggersInput } from './evolution-trigger-prose-update-without-evolution-triggers.input';
import { evolution_trigger_proseCreateWithoutEvolution_triggersInput } from './evolution-trigger-prose-create-without-evolution-triggers.input';

@InputType()
export class evolution_trigger_proseUpsertWithWhereUniqueWithoutEvolution_triggersInput {

    @Field(() => evolution_trigger_proseWhereUniqueInput, {nullable:false})
    @Type(() => evolution_trigger_proseWhereUniqueInput)
    where!: evolution_trigger_proseWhereUniqueInput;

    @Field(() => evolution_trigger_proseUpdateWithoutEvolution_triggersInput, {nullable:false})
    @Type(() => evolution_trigger_proseUpdateWithoutEvolution_triggersInput)
    update!: evolution_trigger_proseUpdateWithoutEvolution_triggersInput;

    @Field(() => evolution_trigger_proseCreateWithoutEvolution_triggersInput, {nullable:false})
    @Type(() => evolution_trigger_proseCreateWithoutEvolution_triggersInput)
    create!: evolution_trigger_proseCreateWithoutEvolution_triggersInput;
}
