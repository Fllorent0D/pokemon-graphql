import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_value_proseCreateWithoutLanguagesInput } from './encounter-condition-value-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { encounter_condition_value_proseCreateOrConnectWithoutLanguagesInput } from './encounter-condition-value-prose-create-or-connect-without-languages.input';
import { encounter_condition_value_proseUpsertWithWhereUniqueWithoutLanguagesInput } from './encounter-condition-value-prose-upsert-with-where-unique-without-languages.input';
import { encounter_condition_value_proseWhereUniqueInput } from './encounter-condition-value-prose-where-unique.input';
import { encounter_condition_value_proseUpdateWithWhereUniqueWithoutLanguagesInput } from './encounter-condition-value-prose-update-with-where-unique-without-languages.input';
import { encounter_condition_value_proseUpdateManyWithWhereWithoutLanguagesInput } from './encounter-condition-value-prose-update-many-with-where-without-languages.input';
import { encounter_condition_value_proseScalarWhereInput } from './encounter-condition-value-prose-scalar-where.input';

@InputType()
export class encounter_condition_value_proseUncheckedUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [encounter_condition_value_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => encounter_condition_value_proseCreateWithoutLanguagesInput)
    create?: Array<encounter_condition_value_proseCreateWithoutLanguagesInput>;

    @Field(() => [encounter_condition_value_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => encounter_condition_value_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<encounter_condition_value_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [encounter_condition_value_proseUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => encounter_condition_value_proseUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<encounter_condition_value_proseUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [encounter_condition_value_proseWhereUniqueInput], {nullable:true})
    @Type(() => encounter_condition_value_proseWhereUniqueInput)
    set?: Array<encounter_condition_value_proseWhereUniqueInput>;

    @Field(() => [encounter_condition_value_proseWhereUniqueInput], {nullable:true})
    @Type(() => encounter_condition_value_proseWhereUniqueInput)
    disconnect?: Array<encounter_condition_value_proseWhereUniqueInput>;

    @Field(() => [encounter_condition_value_proseWhereUniqueInput], {nullable:true})
    @Type(() => encounter_condition_value_proseWhereUniqueInput)
    delete?: Array<encounter_condition_value_proseWhereUniqueInput>;

    @Field(() => [encounter_condition_value_proseWhereUniqueInput], {nullable:true})
    @Type(() => encounter_condition_value_proseWhereUniqueInput)
    connect?: Array<encounter_condition_value_proseWhereUniqueInput>;

    @Field(() => [encounter_condition_value_proseUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => encounter_condition_value_proseUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<encounter_condition_value_proseUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [encounter_condition_value_proseUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => encounter_condition_value_proseUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<encounter_condition_value_proseUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [encounter_condition_value_proseScalarWhereInput], {nullable:true})
    @Type(() => encounter_condition_value_proseScalarWhereInput)
    deleteMany?: Array<encounter_condition_value_proseScalarWhereInput>;
}
