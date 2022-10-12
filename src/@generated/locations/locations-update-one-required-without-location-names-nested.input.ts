import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { locationsCreateWithoutLocation_namesInput } from './locations-create-without-location-names.input';
import { Type } from 'class-transformer';
import { locationsCreateOrConnectWithoutLocation_namesInput } from './locations-create-or-connect-without-location-names.input';
import { locationsUpsertWithoutLocation_namesInput } from './locations-upsert-without-location-names.input';
import { locationsWhereUniqueInput } from './locations-where-unique.input';
import { locationsUpdateWithoutLocation_namesInput } from './locations-update-without-location-names.input';

@InputType()
export class locationsUpdateOneRequiredWithoutLocation_namesNestedInput {

    @Field(() => locationsCreateWithoutLocation_namesInput, {nullable:true})
    @Type(() => locationsCreateWithoutLocation_namesInput)
    create?: locationsCreateWithoutLocation_namesInput;

    @Field(() => locationsCreateOrConnectWithoutLocation_namesInput, {nullable:true})
    @Type(() => locationsCreateOrConnectWithoutLocation_namesInput)
    connectOrCreate?: locationsCreateOrConnectWithoutLocation_namesInput;

    @Field(() => locationsUpsertWithoutLocation_namesInput, {nullable:true})
    @Type(() => locationsUpsertWithoutLocation_namesInput)
    upsert?: locationsUpsertWithoutLocation_namesInput;

    @Field(() => locationsWhereUniqueInput, {nullable:true})
    @Type(() => locationsWhereUniqueInput)
    connect?: locationsWhereUniqueInput;

    @Field(() => locationsUpdateWithoutLocation_namesInput, {nullable:true})
    @Type(() => locationsUpdateWithoutLocation_namesInput)
    update?: locationsUpdateWithoutLocation_namesInput;
}
