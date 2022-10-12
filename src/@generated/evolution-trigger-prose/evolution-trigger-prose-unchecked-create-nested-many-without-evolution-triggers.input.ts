import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { evolution_trigger_proseCreateWithoutEvolution_triggersInput } from './evolution-trigger-prose-create-without-evolution-triggers.input';
import { Type } from 'class-transformer';
import { evolution_trigger_proseCreateOrConnectWithoutEvolution_triggersInput } from './evolution-trigger-prose-create-or-connect-without-evolution-triggers.input';
import { evolution_trigger_proseWhereUniqueInput } from './evolution-trigger-prose-where-unique.input';

@InputType()
export class evolution_trigger_proseUncheckedCreateNestedManyWithoutEvolution_triggersInput {

    @Field(() => [evolution_trigger_proseCreateWithoutEvolution_triggersInput], {nullable:true})
    @Type(() => evolution_trigger_proseCreateWithoutEvolution_triggersInput)
    create?: Array<evolution_trigger_proseCreateWithoutEvolution_triggersInput>;

    @Field(() => [evolution_trigger_proseCreateOrConnectWithoutEvolution_triggersInput], {nullable:true})
    @Type(() => evolution_trigger_proseCreateOrConnectWithoutEvolution_triggersInput)
    connectOrCreate?: Array<evolution_trigger_proseCreateOrConnectWithoutEvolution_triggersInput>;

    @Field(() => [evolution_trigger_proseWhereUniqueInput], {nullable:true})
    @Type(() => evolution_trigger_proseWhereUniqueInput)
    connect?: Array<evolution_trigger_proseWhereUniqueInput>;
}
