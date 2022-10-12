import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { contest_effect_proseCreateWithoutLanguagesInput } from './contest-effect-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { contest_effect_proseCreateOrConnectWithoutLanguagesInput } from './contest-effect-prose-create-or-connect-without-languages.input';
import { contest_effect_proseUpsertWithWhereUniqueWithoutLanguagesInput } from './contest-effect-prose-upsert-with-where-unique-without-languages.input';
import { contest_effect_proseWhereUniqueInput } from './contest-effect-prose-where-unique.input';
import { contest_effect_proseUpdateWithWhereUniqueWithoutLanguagesInput } from './contest-effect-prose-update-with-where-unique-without-languages.input';
import { contest_effect_proseUpdateManyWithWhereWithoutLanguagesInput } from './contest-effect-prose-update-many-with-where-without-languages.input';
import { contest_effect_proseScalarWhereInput } from './contest-effect-prose-scalar-where.input';

@InputType()
export class contest_effect_proseUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [contest_effect_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => contest_effect_proseCreateWithoutLanguagesInput)
    create?: Array<contest_effect_proseCreateWithoutLanguagesInput>;

    @Field(() => [contest_effect_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => contest_effect_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<contest_effect_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [contest_effect_proseUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => contest_effect_proseUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<contest_effect_proseUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [contest_effect_proseWhereUniqueInput], {nullable:true})
    @Type(() => contest_effect_proseWhereUniqueInput)
    set?: Array<contest_effect_proseWhereUniqueInput>;

    @Field(() => [contest_effect_proseWhereUniqueInput], {nullable:true})
    @Type(() => contest_effect_proseWhereUniqueInput)
    disconnect?: Array<contest_effect_proseWhereUniqueInput>;

    @Field(() => [contest_effect_proseWhereUniqueInput], {nullable:true})
    @Type(() => contest_effect_proseWhereUniqueInput)
    delete?: Array<contest_effect_proseWhereUniqueInput>;

    @Field(() => [contest_effect_proseWhereUniqueInput], {nullable:true})
    @Type(() => contest_effect_proseWhereUniqueInput)
    connect?: Array<contest_effect_proseWhereUniqueInput>;

    @Field(() => [contest_effect_proseUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => contest_effect_proseUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<contest_effect_proseUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [contest_effect_proseUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => contest_effect_proseUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<contest_effect_proseUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [contest_effect_proseScalarWhereInput], {nullable:true})
    @Type(() => contest_effect_proseScalarWhereInput)
    deleteMany?: Array<contest_effect_proseScalarWhereInput>;
}
