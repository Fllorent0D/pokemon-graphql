import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { locationsCreateWithoutLocation_areasInput } from './locations-create-without-location-areas.input';
import { Type } from 'class-transformer';
import { locationsCreateOrConnectWithoutLocation_areasInput } from './locations-create-or-connect-without-location-areas.input';
import { locationsUpsertWithoutLocation_areasInput } from './locations-upsert-without-location-areas.input';
import { locationsWhereUniqueInput } from './locations-where-unique.input';
import { locationsUpdateWithoutLocation_areasInput } from './locations-update-without-location-areas.input';

@InputType()
export class locationsUpdateOneRequiredWithoutLocation_areasNestedInput {

    @Field(() => locationsCreateWithoutLocation_areasInput, {nullable:true})
    @Type(() => locationsCreateWithoutLocation_areasInput)
    create?: locationsCreateWithoutLocation_areasInput;

    @Field(() => locationsCreateOrConnectWithoutLocation_areasInput, {nullable:true})
    @Type(() => locationsCreateOrConnectWithoutLocation_areasInput)
    connectOrCreate?: locationsCreateOrConnectWithoutLocation_areasInput;

    @Field(() => locationsUpsertWithoutLocation_areasInput, {nullable:true})
    @Type(() => locationsUpsertWithoutLocation_areasInput)
    upsert?: locationsUpsertWithoutLocation_areasInput;

    @Field(() => locationsWhereUniqueInput, {nullable:true})
    @Type(() => locationsWhereUniqueInput)
    connect?: locationsWhereUniqueInput;

    @Field(() => locationsUpdateWithoutLocation_areasInput, {nullable:true})
    @Type(() => locationsUpdateWithoutLocation_areasInput)
    update?: locationsUpdateWithoutLocation_areasInput;
}
