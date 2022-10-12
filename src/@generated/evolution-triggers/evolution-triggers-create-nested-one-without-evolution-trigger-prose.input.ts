import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { evolution_triggersCreateWithoutEvolution_trigger_proseInput } from './evolution-triggers-create-without-evolution-trigger-prose.input';
import { Type } from 'class-transformer';
import { evolution_triggersCreateOrConnectWithoutEvolution_trigger_proseInput } from './evolution-triggers-create-or-connect-without-evolution-trigger-prose.input';
import { evolution_triggersWhereUniqueInput } from './evolution-triggers-where-unique.input';

@InputType()
export class evolution_triggersCreateNestedOneWithoutEvolution_trigger_proseInput {

    @Field(() => evolution_triggersCreateWithoutEvolution_trigger_proseInput, {nullable:true})
    @Type(() => evolution_triggersCreateWithoutEvolution_trigger_proseInput)
    create?: evolution_triggersCreateWithoutEvolution_trigger_proseInput;

    @Field(() => evolution_triggersCreateOrConnectWithoutEvolution_trigger_proseInput, {nullable:true})
    @Type(() => evolution_triggersCreateOrConnectWithoutEvolution_trigger_proseInput)
    connectOrCreate?: evolution_triggersCreateOrConnectWithoutEvolution_trigger_proseInput;

    @Field(() => evolution_triggersWhereUniqueInput, {nullable:true})
    @Type(() => evolution_triggersWhereUniqueInput)
    connect?: evolution_triggersWhereUniqueInput;
}
