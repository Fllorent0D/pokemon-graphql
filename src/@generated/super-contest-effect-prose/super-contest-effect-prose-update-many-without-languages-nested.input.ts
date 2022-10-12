import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { super_contest_effect_proseCreateWithoutLanguagesInput } from './super-contest-effect-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { super_contest_effect_proseCreateOrConnectWithoutLanguagesInput } from './super-contest-effect-prose-create-or-connect-without-languages.input';
import { super_contest_effect_proseUpsertWithWhereUniqueWithoutLanguagesInput } from './super-contest-effect-prose-upsert-with-where-unique-without-languages.input';
import { super_contest_effect_proseWhereUniqueInput } from './super-contest-effect-prose-where-unique.input';
import { super_contest_effect_proseUpdateWithWhereUniqueWithoutLanguagesInput } from './super-contest-effect-prose-update-with-where-unique-without-languages.input';
import { super_contest_effect_proseUpdateManyWithWhereWithoutLanguagesInput } from './super-contest-effect-prose-update-many-with-where-without-languages.input';
import { super_contest_effect_proseScalarWhereInput } from './super-contest-effect-prose-scalar-where.input';

@InputType()
export class super_contest_effect_proseUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [super_contest_effect_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => super_contest_effect_proseCreateWithoutLanguagesInput)
    create?: Array<super_contest_effect_proseCreateWithoutLanguagesInput>;

    @Field(() => [super_contest_effect_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => super_contest_effect_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<super_contest_effect_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [super_contest_effect_proseUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => super_contest_effect_proseUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<super_contest_effect_proseUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [super_contest_effect_proseWhereUniqueInput], {nullable:true})
    @Type(() => super_contest_effect_proseWhereUniqueInput)
    set?: Array<super_contest_effect_proseWhereUniqueInput>;

    @Field(() => [super_contest_effect_proseWhereUniqueInput], {nullable:true})
    @Type(() => super_contest_effect_proseWhereUniqueInput)
    disconnect?: Array<super_contest_effect_proseWhereUniqueInput>;

    @Field(() => [super_contest_effect_proseWhereUniqueInput], {nullable:true})
    @Type(() => super_contest_effect_proseWhereUniqueInput)
    delete?: Array<super_contest_effect_proseWhereUniqueInput>;

    @Field(() => [super_contest_effect_proseWhereUniqueInput], {nullable:true})
    @Type(() => super_contest_effect_proseWhereUniqueInput)
    connect?: Array<super_contest_effect_proseWhereUniqueInput>;

    @Field(() => [super_contest_effect_proseUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => super_contest_effect_proseUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<super_contest_effect_proseUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [super_contest_effect_proseUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => super_contest_effect_proseUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<super_contest_effect_proseUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [super_contest_effect_proseScalarWhereInput], {nullable:true})
    @Type(() => super_contest_effect_proseScalarWhereInput)
    deleteMany?: Array<super_contest_effect_proseScalarWhereInput>;
}
