import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_namesCreateWithoutLanguagesInput } from './item-names-create-without-languages.input';
import { Type } from 'class-transformer';
import { item_namesCreateOrConnectWithoutLanguagesInput } from './item-names-create-or-connect-without-languages.input';
import { item_namesUpsertWithWhereUniqueWithoutLanguagesInput } from './item-names-upsert-with-where-unique-without-languages.input';
import { item_namesWhereUniqueInput } from './item-names-where-unique.input';
import { item_namesUpdateWithWhereUniqueWithoutLanguagesInput } from './item-names-update-with-where-unique-without-languages.input';
import { item_namesUpdateManyWithWhereWithoutLanguagesInput } from './item-names-update-many-with-where-without-languages.input';
import { item_namesScalarWhereInput } from './item-names-scalar-where.input';

@InputType()
export class item_namesUncheckedUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [item_namesCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => item_namesCreateWithoutLanguagesInput)
    create?: Array<item_namesCreateWithoutLanguagesInput>;

    @Field(() => [item_namesCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => item_namesCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<item_namesCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [item_namesUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => item_namesUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<item_namesUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [item_namesWhereUniqueInput], {nullable:true})
    @Type(() => item_namesWhereUniqueInput)
    set?: Array<item_namesWhereUniqueInput>;

    @Field(() => [item_namesWhereUniqueInput], {nullable:true})
    @Type(() => item_namesWhereUniqueInput)
    disconnect?: Array<item_namesWhereUniqueInput>;

    @Field(() => [item_namesWhereUniqueInput], {nullable:true})
    @Type(() => item_namesWhereUniqueInput)
    delete?: Array<item_namesWhereUniqueInput>;

    @Field(() => [item_namesWhereUniqueInput], {nullable:true})
    @Type(() => item_namesWhereUniqueInput)
    connect?: Array<item_namesWhereUniqueInput>;

    @Field(() => [item_namesUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => item_namesUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<item_namesUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [item_namesUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => item_namesUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<item_namesUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [item_namesScalarWhereInput], {nullable:true})
    @Type(() => item_namesScalarWhereInput)
    deleteMany?: Array<item_namesScalarWhereInput>;
}
