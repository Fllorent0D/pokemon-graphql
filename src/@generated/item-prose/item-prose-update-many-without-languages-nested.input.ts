import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_proseCreateWithoutLanguagesInput } from './item-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { item_proseCreateOrConnectWithoutLanguagesInput } from './item-prose-create-or-connect-without-languages.input';
import { item_proseUpsertWithWhereUniqueWithoutLanguagesInput } from './item-prose-upsert-with-where-unique-without-languages.input';
import { item_proseWhereUniqueInput } from './item-prose-where-unique.input';
import { item_proseUpdateWithWhereUniqueWithoutLanguagesInput } from './item-prose-update-with-where-unique-without-languages.input';
import { item_proseUpdateManyWithWhereWithoutLanguagesInput } from './item-prose-update-many-with-where-without-languages.input';
import { item_proseScalarWhereInput } from './item-prose-scalar-where.input';

@InputType()
export class item_proseUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [item_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => item_proseCreateWithoutLanguagesInput)
    create?: Array<item_proseCreateWithoutLanguagesInput>;

    @Field(() => [item_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => item_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<item_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [item_proseUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => item_proseUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<item_proseUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [item_proseWhereUniqueInput], {nullable:true})
    @Type(() => item_proseWhereUniqueInput)
    set?: Array<item_proseWhereUniqueInput>;

    @Field(() => [item_proseWhereUniqueInput], {nullable:true})
    @Type(() => item_proseWhereUniqueInput)
    disconnect?: Array<item_proseWhereUniqueInput>;

    @Field(() => [item_proseWhereUniqueInput], {nullable:true})
    @Type(() => item_proseWhereUniqueInput)
    delete?: Array<item_proseWhereUniqueInput>;

    @Field(() => [item_proseWhereUniqueInput], {nullable:true})
    @Type(() => item_proseWhereUniqueInput)
    connect?: Array<item_proseWhereUniqueInput>;

    @Field(() => [item_proseUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => item_proseUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<item_proseUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [item_proseUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => item_proseUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<item_proseUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [item_proseScalarWhereInput], {nullable:true})
    @Type(() => item_proseScalarWhereInput)
    deleteMany?: Array<item_proseScalarWhereInput>;
}
