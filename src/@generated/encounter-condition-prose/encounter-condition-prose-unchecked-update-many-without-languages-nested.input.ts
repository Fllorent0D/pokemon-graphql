import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_proseCreateWithoutLanguagesInput } from './encounter-condition-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { encounter_condition_proseCreateOrConnectWithoutLanguagesInput } from './encounter-condition-prose-create-or-connect-without-languages.input';
import { encounter_condition_proseUpsertWithWhereUniqueWithoutLanguagesInput } from './encounter-condition-prose-upsert-with-where-unique-without-languages.input';
import { encounter_condition_proseWhereUniqueInput } from './encounter-condition-prose-where-unique.input';
import { encounter_condition_proseUpdateWithWhereUniqueWithoutLanguagesInput } from './encounter-condition-prose-update-with-where-unique-without-languages.input';
import { encounter_condition_proseUpdateManyWithWhereWithoutLanguagesInput } from './encounter-condition-prose-update-many-with-where-without-languages.input';
import { encounter_condition_proseScalarWhereInput } from './encounter-condition-prose-scalar-where.input';

@InputType()
export class encounter_condition_proseUncheckedUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [encounter_condition_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => encounter_condition_proseCreateWithoutLanguagesInput)
    create?: Array<encounter_condition_proseCreateWithoutLanguagesInput>;

    @Field(() => [encounter_condition_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => encounter_condition_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<encounter_condition_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [encounter_condition_proseUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => encounter_condition_proseUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<encounter_condition_proseUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [encounter_condition_proseWhereUniqueInput], {nullable:true})
    @Type(() => encounter_condition_proseWhereUniqueInput)
    set?: Array<encounter_condition_proseWhereUniqueInput>;

    @Field(() => [encounter_condition_proseWhereUniqueInput], {nullable:true})
    @Type(() => encounter_condition_proseWhereUniqueInput)
    disconnect?: Array<encounter_condition_proseWhereUniqueInput>;

    @Field(() => [encounter_condition_proseWhereUniqueInput], {nullable:true})
    @Type(() => encounter_condition_proseWhereUniqueInput)
    delete?: Array<encounter_condition_proseWhereUniqueInput>;

    @Field(() => [encounter_condition_proseWhereUniqueInput], {nullable:true})
    @Type(() => encounter_condition_proseWhereUniqueInput)
    connect?: Array<encounter_condition_proseWhereUniqueInput>;

    @Field(() => [encounter_condition_proseUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => encounter_condition_proseUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<encounter_condition_proseUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [encounter_condition_proseUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => encounter_condition_proseUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<encounter_condition_proseUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [encounter_condition_proseScalarWhereInput], {nullable:true})
    @Type(() => encounter_condition_proseScalarWhereInput)
    deleteMany?: Array<encounter_condition_proseScalarWhereInput>;
}
