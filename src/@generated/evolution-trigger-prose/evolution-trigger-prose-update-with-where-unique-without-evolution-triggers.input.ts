import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { evolution_trigger_proseWhereUniqueInput } from './evolution-trigger-prose-where-unique.input';
import { Type } from 'class-transformer';
import { evolution_trigger_proseUpdateWithoutEvolution_triggersInput } from './evolution-trigger-prose-update-without-evolution-triggers.input';

@InputType()
export class evolution_trigger_proseUpdateWithWhereUniqueWithoutEvolution_triggersInput {

    @Field(() => evolution_trigger_proseWhereUniqueInput, {nullable:false})
    @Type(() => evolution_trigger_proseWhereUniqueInput)
    where!: evolution_trigger_proseWhereUniqueInput;

    @Field(() => evolution_trigger_proseUpdateWithoutEvolution_triggersInput, {nullable:false})
    @Type(() => evolution_trigger_proseUpdateWithoutEvolution_triggersInput)
    data!: evolution_trigger_proseUpdateWithoutEvolution_triggersInput;
}
