import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flag_proseCreateWithoutLanguagesInput } from './item-flag-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { item_flag_proseCreateOrConnectWithoutLanguagesInput } from './item-flag-prose-create-or-connect-without-languages.input';
import { item_flag_proseUpsertWithWhereUniqueWithoutLanguagesInput } from './item-flag-prose-upsert-with-where-unique-without-languages.input';
import { item_flag_proseWhereUniqueInput } from './item-flag-prose-where-unique.input';
import { item_flag_proseUpdateWithWhereUniqueWithoutLanguagesInput } from './item-flag-prose-update-with-where-unique-without-languages.input';
import { item_flag_proseUpdateManyWithWhereWithoutLanguagesInput } from './item-flag-prose-update-many-with-where-without-languages.input';
import { item_flag_proseScalarWhereInput } from './item-flag-prose-scalar-where.input';

@InputType()
export class item_flag_proseUncheckedUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [item_flag_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => item_flag_proseCreateWithoutLanguagesInput)
    create?: Array<item_flag_proseCreateWithoutLanguagesInput>;

    @Field(() => [item_flag_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => item_flag_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<item_flag_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [item_flag_proseUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => item_flag_proseUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<item_flag_proseUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [item_flag_proseWhereUniqueInput], {nullable:true})
    @Type(() => item_flag_proseWhereUniqueInput)
    set?: Array<item_flag_proseWhereUniqueInput>;

    @Field(() => [item_flag_proseWhereUniqueInput], {nullable:true})
    @Type(() => item_flag_proseWhereUniqueInput)
    disconnect?: Array<item_flag_proseWhereUniqueInput>;

    @Field(() => [item_flag_proseWhereUniqueInput], {nullable:true})
    @Type(() => item_flag_proseWhereUniqueInput)
    delete?: Array<item_flag_proseWhereUniqueInput>;

    @Field(() => [item_flag_proseWhereUniqueInput], {nullable:true})
    @Type(() => item_flag_proseWhereUniqueInput)
    connect?: Array<item_flag_proseWhereUniqueInput>;

    @Field(() => [item_flag_proseUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => item_flag_proseUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<item_flag_proseUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [item_flag_proseUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => item_flag_proseUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<item_flag_proseUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [item_flag_proseScalarWhereInput], {nullable:true})
    @Type(() => item_flag_proseScalarWhereInput)
    deleteMany?: Array<item_flag_proseScalarWhereInput>;
}
