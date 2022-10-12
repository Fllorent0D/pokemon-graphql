import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { evolution_triggersCreateWithoutEvolution_trigger_proseInput } from './evolution-triggers-create-without-evolution-trigger-prose.input';
import { Type } from 'class-transformer';
import { evolution_triggersCreateOrConnectWithoutEvolution_trigger_proseInput } from './evolution-triggers-create-or-connect-without-evolution-trigger-prose.input';
import { evolution_triggersUpsertWithoutEvolution_trigger_proseInput } from './evolution-triggers-upsert-without-evolution-trigger-prose.input';
import { evolution_triggersWhereUniqueInput } from './evolution-triggers-where-unique.input';
import { evolution_triggersUpdateWithoutEvolution_trigger_proseInput } from './evolution-triggers-update-without-evolution-trigger-prose.input';

@InputType()
export class evolution_triggersUpdateOneRequiredWithoutEvolution_trigger_proseNestedInput {

    @Field(() => evolution_triggersCreateWithoutEvolution_trigger_proseInput, {nullable:true})
    @Type(() => evolution_triggersCreateWithoutEvolution_trigger_proseInput)
    create?: evolution_triggersCreateWithoutEvolution_trigger_proseInput;

    @Field(() => evolution_triggersCreateOrConnectWithoutEvolution_trigger_proseInput, {nullable:true})
    @Type(() => evolution_triggersCreateOrConnectWithoutEvolution_trigger_proseInput)
    connectOrCreate?: evolution_triggersCreateOrConnectWithoutEvolution_trigger_proseInput;

    @Field(() => evolution_triggersUpsertWithoutEvolution_trigger_proseInput, {nullable:true})
    @Type(() => evolution_triggersUpsertWithoutEvolution_trigger_proseInput)
    upsert?: evolution_triggersUpsertWithoutEvolution_trigger_proseInput;

    @Field(() => evolution_triggersWhereUniqueInput, {nullable:true})
    @Type(() => evolution_triggersWhereUniqueInput)
    connect?: evolution_triggersWhereUniqueInput;

    @Field(() => evolution_triggersUpdateWithoutEvolution_trigger_proseInput, {nullable:true})
    @Type(() => evolution_triggersUpdateWithoutEvolution_trigger_proseInput)
    update?: evolution_triggersUpdateWithoutEvolution_trigger_proseInput;
}
