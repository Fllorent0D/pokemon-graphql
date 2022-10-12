import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_method_proseCreateWithoutEncounter_methodsInput } from './encounter-method-prose-create-without-encounter-methods.input';
import { Type } from 'class-transformer';
import { encounter_method_proseCreateOrConnectWithoutEncounter_methodsInput } from './encounter-method-prose-create-or-connect-without-encounter-methods.input';
import { encounter_method_proseUpsertWithWhereUniqueWithoutEncounter_methodsInput } from './encounter-method-prose-upsert-with-where-unique-without-encounter-methods.input';
import { encounter_method_proseWhereUniqueInput } from './encounter-method-prose-where-unique.input';
import { encounter_method_proseUpdateWithWhereUniqueWithoutEncounter_methodsInput } from './encounter-method-prose-update-with-where-unique-without-encounter-methods.input';
import { encounter_method_proseUpdateManyWithWhereWithoutEncounter_methodsInput } from './encounter-method-prose-update-many-with-where-without-encounter-methods.input';
import { encounter_method_proseScalarWhereInput } from './encounter-method-prose-scalar-where.input';

@InputType()
export class encounter_method_proseUncheckedUpdateManyWithoutEncounter_methodsNestedInput {

    @Field(() => [encounter_method_proseCreateWithoutEncounter_methodsInput], {nullable:true})
    @Type(() => encounter_method_proseCreateWithoutEncounter_methodsInput)
    create?: Array<encounter_method_proseCreateWithoutEncounter_methodsInput>;

    @Field(() => [encounter_method_proseCreateOrConnectWithoutEncounter_methodsInput], {nullable:true})
    @Type(() => encounter_method_proseCreateOrConnectWithoutEncounter_methodsInput)
    connectOrCreate?: Array<encounter_method_proseCreateOrConnectWithoutEncounter_methodsInput>;

    @Field(() => [encounter_method_proseUpsertWithWhereUniqueWithoutEncounter_methodsInput], {nullable:true})
    @Type(() => encounter_method_proseUpsertWithWhereUniqueWithoutEncounter_methodsInput)
    upsert?: Array<encounter_method_proseUpsertWithWhereUniqueWithoutEncounter_methodsInput>;

    @Field(() => [encounter_method_proseWhereUniqueInput], {nullable:true})
    @Type(() => encounter_method_proseWhereUniqueInput)
    set?: Array<encounter_method_proseWhereUniqueInput>;

    @Field(() => [encounter_method_proseWhereUniqueInput], {nullable:true})
    @Type(() => encounter_method_proseWhereUniqueInput)
    disconnect?: Array<encounter_method_proseWhereUniqueInput>;

    @Field(() => [encounter_method_proseWhereUniqueInput], {nullable:true})
    @Type(() => encounter_method_proseWhereUniqueInput)
    delete?: Array<encounter_method_proseWhereUniqueInput>;

    @Field(() => [encounter_method_proseWhereUniqueInput], {nullable:true})
    @Type(() => encounter_method_proseWhereUniqueInput)
    connect?: Array<encounter_method_proseWhereUniqueInput>;

    @Field(() => [encounter_method_proseUpdateWithWhereUniqueWithoutEncounter_methodsInput], {nullable:true})
    @Type(() => encounter_method_proseUpdateWithWhereUniqueWithoutEncounter_methodsInput)
    update?: Array<encounter_method_proseUpdateWithWhereUniqueWithoutEncounter_methodsInput>;

    @Field(() => [encounter_method_proseUpdateManyWithWhereWithoutEncounter_methodsInput], {nullable:true})
    @Type(() => encounter_method_proseUpdateManyWithWhereWithoutEncounter_methodsInput)
    updateMany?: Array<encounter_method_proseUpdateManyWithWhereWithoutEncounter_methodsInput>;

    @Field(() => [encounter_method_proseScalarWhereInput], {nullable:true})
    @Type(() => encounter_method_proseScalarWhereInput)
    deleteMany?: Array<encounter_method_proseScalarWhereInput>;
}
