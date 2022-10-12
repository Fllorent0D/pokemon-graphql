import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_method_proseCreateWithoutLanguagesInput } from './encounter-method-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { encounter_method_proseCreateOrConnectWithoutLanguagesInput } from './encounter-method-prose-create-or-connect-without-languages.input';
import { encounter_method_proseUpsertWithWhereUniqueWithoutLanguagesInput } from './encounter-method-prose-upsert-with-where-unique-without-languages.input';
import { encounter_method_proseWhereUniqueInput } from './encounter-method-prose-where-unique.input';
import { encounter_method_proseUpdateWithWhereUniqueWithoutLanguagesInput } from './encounter-method-prose-update-with-where-unique-without-languages.input';
import { encounter_method_proseUpdateManyWithWhereWithoutLanguagesInput } from './encounter-method-prose-update-many-with-where-without-languages.input';
import { encounter_method_proseScalarWhereInput } from './encounter-method-prose-scalar-where.input';

@InputType()
export class encounter_method_proseUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [encounter_method_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => encounter_method_proseCreateWithoutLanguagesInput)
    create?: Array<encounter_method_proseCreateWithoutLanguagesInput>;

    @Field(() => [encounter_method_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => encounter_method_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<encounter_method_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [encounter_method_proseUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => encounter_method_proseUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<encounter_method_proseUpsertWithWhereUniqueWithoutLanguagesInput>;

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

    @Field(() => [encounter_method_proseUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => encounter_method_proseUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<encounter_method_proseUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [encounter_method_proseUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => encounter_method_proseUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<encounter_method_proseUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [encounter_method_proseScalarWhereInput], {nullable:true})
    @Type(() => encounter_method_proseScalarWhereInput)
    deleteMany?: Array<encounter_method_proseScalarWhereInput>;
}
