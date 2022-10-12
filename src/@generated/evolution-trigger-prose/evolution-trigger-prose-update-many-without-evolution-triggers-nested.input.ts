import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { evolution_trigger_proseCreateWithoutEvolution_triggersInput } from './evolution-trigger-prose-create-without-evolution-triggers.input';
import { Type } from 'class-transformer';
import { evolution_trigger_proseCreateOrConnectWithoutEvolution_triggersInput } from './evolution-trigger-prose-create-or-connect-without-evolution-triggers.input';
import { evolution_trigger_proseUpsertWithWhereUniqueWithoutEvolution_triggersInput } from './evolution-trigger-prose-upsert-with-where-unique-without-evolution-triggers.input';
import { evolution_trigger_proseWhereUniqueInput } from './evolution-trigger-prose-where-unique.input';
import { evolution_trigger_proseUpdateWithWhereUniqueWithoutEvolution_triggersInput } from './evolution-trigger-prose-update-with-where-unique-without-evolution-triggers.input';
import { evolution_trigger_proseUpdateManyWithWhereWithoutEvolution_triggersInput } from './evolution-trigger-prose-update-many-with-where-without-evolution-triggers.input';
import { evolution_trigger_proseScalarWhereInput } from './evolution-trigger-prose-scalar-where.input';

@InputType()
export class evolution_trigger_proseUpdateManyWithoutEvolution_triggersNestedInput {

    @Field(() => [evolution_trigger_proseCreateWithoutEvolution_triggersInput], {nullable:true})
    @Type(() => evolution_trigger_proseCreateWithoutEvolution_triggersInput)
    create?: Array<evolution_trigger_proseCreateWithoutEvolution_triggersInput>;

    @Field(() => [evolution_trigger_proseCreateOrConnectWithoutEvolution_triggersInput], {nullable:true})
    @Type(() => evolution_trigger_proseCreateOrConnectWithoutEvolution_triggersInput)
    connectOrCreate?: Array<evolution_trigger_proseCreateOrConnectWithoutEvolution_triggersInput>;

    @Field(() => [evolution_trigger_proseUpsertWithWhereUniqueWithoutEvolution_triggersInput], {nullable:true})
    @Type(() => evolution_trigger_proseUpsertWithWhereUniqueWithoutEvolution_triggersInput)
    upsert?: Array<evolution_trigger_proseUpsertWithWhereUniqueWithoutEvolution_triggersInput>;

    @Field(() => [evolution_trigger_proseWhereUniqueInput], {nullable:true})
    @Type(() => evolution_trigger_proseWhereUniqueInput)
    set?: Array<evolution_trigger_proseWhereUniqueInput>;

    @Field(() => [evolution_trigger_proseWhereUniqueInput], {nullable:true})
    @Type(() => evolution_trigger_proseWhereUniqueInput)
    disconnect?: Array<evolution_trigger_proseWhereUniqueInput>;

    @Field(() => [evolution_trigger_proseWhereUniqueInput], {nullable:true})
    @Type(() => evolution_trigger_proseWhereUniqueInput)
    delete?: Array<evolution_trigger_proseWhereUniqueInput>;

    @Field(() => [evolution_trigger_proseWhereUniqueInput], {nullable:true})
    @Type(() => evolution_trigger_proseWhereUniqueInput)
    connect?: Array<evolution_trigger_proseWhereUniqueInput>;

    @Field(() => [evolution_trigger_proseUpdateWithWhereUniqueWithoutEvolution_triggersInput], {nullable:true})
    @Type(() => evolution_trigger_proseUpdateWithWhereUniqueWithoutEvolution_triggersInput)
    update?: Array<evolution_trigger_proseUpdateWithWhereUniqueWithoutEvolution_triggersInput>;

    @Field(() => [evolution_trigger_proseUpdateManyWithWhereWithoutEvolution_triggersInput], {nullable:true})
    @Type(() => evolution_trigger_proseUpdateManyWithWhereWithoutEvolution_triggersInput)
    updateMany?: Array<evolution_trigger_proseUpdateManyWithWhereWithoutEvolution_triggersInput>;

    @Field(() => [evolution_trigger_proseScalarWhereInput], {nullable:true})
    @Type(() => evolution_trigger_proseScalarWhereInput)
    deleteMany?: Array<evolution_trigger_proseScalarWhereInput>;
}
