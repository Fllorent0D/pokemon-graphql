import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_pocket_namesCreateWithoutLanguagesInput } from './item-pocket-names-create-without-languages.input';
import { Type } from 'class-transformer';
import { item_pocket_namesCreateOrConnectWithoutLanguagesInput } from './item-pocket-names-create-or-connect-without-languages.input';
import { item_pocket_namesUpsertWithWhereUniqueWithoutLanguagesInput } from './item-pocket-names-upsert-with-where-unique-without-languages.input';
import { item_pocket_namesWhereUniqueInput } from './item-pocket-names-where-unique.input';
import { item_pocket_namesUpdateWithWhereUniqueWithoutLanguagesInput } from './item-pocket-names-update-with-where-unique-without-languages.input';
import { item_pocket_namesUpdateManyWithWhereWithoutLanguagesInput } from './item-pocket-names-update-many-with-where-without-languages.input';
import { item_pocket_namesScalarWhereInput } from './item-pocket-names-scalar-where.input';

@InputType()
export class item_pocket_namesUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [item_pocket_namesCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => item_pocket_namesCreateWithoutLanguagesInput)
    create?: Array<item_pocket_namesCreateWithoutLanguagesInput>;

    @Field(() => [item_pocket_namesCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => item_pocket_namesCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<item_pocket_namesCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [item_pocket_namesUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => item_pocket_namesUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<item_pocket_namesUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [item_pocket_namesWhereUniqueInput], {nullable:true})
    @Type(() => item_pocket_namesWhereUniqueInput)
    set?: Array<item_pocket_namesWhereUniqueInput>;

    @Field(() => [item_pocket_namesWhereUniqueInput], {nullable:true})
    @Type(() => item_pocket_namesWhereUniqueInput)
    disconnect?: Array<item_pocket_namesWhereUniqueInput>;

    @Field(() => [item_pocket_namesWhereUniqueInput], {nullable:true})
    @Type(() => item_pocket_namesWhereUniqueInput)
    delete?: Array<item_pocket_namesWhereUniqueInput>;

    @Field(() => [item_pocket_namesWhereUniqueInput], {nullable:true})
    @Type(() => item_pocket_namesWhereUniqueInput)
    connect?: Array<item_pocket_namesWhereUniqueInput>;

    @Field(() => [item_pocket_namesUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => item_pocket_namesUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<item_pocket_namesUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [item_pocket_namesUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => item_pocket_namesUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<item_pocket_namesUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [item_pocket_namesScalarWhereInput], {nullable:true})
    @Type(() => item_pocket_namesScalarWhereInput)
    deleteMany?: Array<item_pocket_namesScalarWhereInput>;
}
