import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { egg_group_proseCreateWithoutLanguagesInput } from './egg-group-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { egg_group_proseCreateOrConnectWithoutLanguagesInput } from './egg-group-prose-create-or-connect-without-languages.input';
import { egg_group_proseUpsertWithWhereUniqueWithoutLanguagesInput } from './egg-group-prose-upsert-with-where-unique-without-languages.input';
import { egg_group_proseWhereUniqueInput } from './egg-group-prose-where-unique.input';
import { egg_group_proseUpdateWithWhereUniqueWithoutLanguagesInput } from './egg-group-prose-update-with-where-unique-without-languages.input';
import { egg_group_proseUpdateManyWithWhereWithoutLanguagesInput } from './egg-group-prose-update-many-with-where-without-languages.input';
import { egg_group_proseScalarWhereInput } from './egg-group-prose-scalar-where.input';

@InputType()
export class egg_group_proseUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [egg_group_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => egg_group_proseCreateWithoutLanguagesInput)
    create?: Array<egg_group_proseCreateWithoutLanguagesInput>;

    @Field(() => [egg_group_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => egg_group_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<egg_group_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [egg_group_proseUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => egg_group_proseUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<egg_group_proseUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [egg_group_proseWhereUniqueInput], {nullable:true})
    @Type(() => egg_group_proseWhereUniqueInput)
    set?: Array<egg_group_proseWhereUniqueInput>;

    @Field(() => [egg_group_proseWhereUniqueInput], {nullable:true})
    @Type(() => egg_group_proseWhereUniqueInput)
    disconnect?: Array<egg_group_proseWhereUniqueInput>;

    @Field(() => [egg_group_proseWhereUniqueInput], {nullable:true})
    @Type(() => egg_group_proseWhereUniqueInput)
    delete?: Array<egg_group_proseWhereUniqueInput>;

    @Field(() => [egg_group_proseWhereUniqueInput], {nullable:true})
    @Type(() => egg_group_proseWhereUniqueInput)
    connect?: Array<egg_group_proseWhereUniqueInput>;

    @Field(() => [egg_group_proseUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => egg_group_proseUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<egg_group_proseUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [egg_group_proseUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => egg_group_proseUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<egg_group_proseUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [egg_group_proseScalarWhereInput], {nullable:true})
    @Type(() => egg_group_proseScalarWhereInput)
    deleteMany?: Array<egg_group_proseScalarWhereInput>;
}
