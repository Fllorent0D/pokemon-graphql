import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flavor_textCreateWithoutLanguagesInput } from './item-flavor-text-create-without-languages.input';
import { Type } from 'class-transformer';
import { item_flavor_textCreateOrConnectWithoutLanguagesInput } from './item-flavor-text-create-or-connect-without-languages.input';
import { item_flavor_textUpsertWithWhereUniqueWithoutLanguagesInput } from './item-flavor-text-upsert-with-where-unique-without-languages.input';
import { item_flavor_textWhereUniqueInput } from './item-flavor-text-where-unique.input';
import { item_flavor_textUpdateWithWhereUniqueWithoutLanguagesInput } from './item-flavor-text-update-with-where-unique-without-languages.input';
import { item_flavor_textUpdateManyWithWhereWithoutLanguagesInput } from './item-flavor-text-update-many-with-where-without-languages.input';
import { item_flavor_textScalarWhereInput } from './item-flavor-text-scalar-where.input';

@InputType()
export class item_flavor_textUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [item_flavor_textCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => item_flavor_textCreateWithoutLanguagesInput)
    create?: Array<item_flavor_textCreateWithoutLanguagesInput>;

    @Field(() => [item_flavor_textCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => item_flavor_textCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<item_flavor_textCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [item_flavor_textUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => item_flavor_textUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<item_flavor_textUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [item_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => item_flavor_textWhereUniqueInput)
    set?: Array<item_flavor_textWhereUniqueInput>;

    @Field(() => [item_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => item_flavor_textWhereUniqueInput)
    disconnect?: Array<item_flavor_textWhereUniqueInput>;

    @Field(() => [item_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => item_flavor_textWhereUniqueInput)
    delete?: Array<item_flavor_textWhereUniqueInput>;

    @Field(() => [item_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => item_flavor_textWhereUniqueInput)
    connect?: Array<item_flavor_textWhereUniqueInput>;

    @Field(() => [item_flavor_textUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => item_flavor_textUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<item_flavor_textUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [item_flavor_textUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => item_flavor_textUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<item_flavor_textUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [item_flavor_textScalarWhereInput], {nullable:true})
    @Type(() => item_flavor_textScalarWhereInput)
    deleteMany?: Array<item_flavor_textScalarWhereInput>;
}
