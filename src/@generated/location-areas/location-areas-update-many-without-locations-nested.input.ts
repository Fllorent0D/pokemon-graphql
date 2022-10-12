import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_areasCreateWithoutLocationsInput } from './location-areas-create-without-locations.input';
import { Type } from 'class-transformer';
import { location_areasCreateOrConnectWithoutLocationsInput } from './location-areas-create-or-connect-without-locations.input';
import { location_areasUpsertWithWhereUniqueWithoutLocationsInput } from './location-areas-upsert-with-where-unique-without-locations.input';
import { location_areasWhereUniqueInput } from './location-areas-where-unique.input';
import { location_areasUpdateWithWhereUniqueWithoutLocationsInput } from './location-areas-update-with-where-unique-without-locations.input';
import { location_areasUpdateManyWithWhereWithoutLocationsInput } from './location-areas-update-many-with-where-without-locations.input';
import { location_areasScalarWhereInput } from './location-areas-scalar-where.input';

@InputType()
export class location_areasUpdateManyWithoutLocationsNestedInput {

    @Field(() => [location_areasCreateWithoutLocationsInput], {nullable:true})
    @Type(() => location_areasCreateWithoutLocationsInput)
    create?: Array<location_areasCreateWithoutLocationsInput>;

    @Field(() => [location_areasCreateOrConnectWithoutLocationsInput], {nullable:true})
    @Type(() => location_areasCreateOrConnectWithoutLocationsInput)
    connectOrCreate?: Array<location_areasCreateOrConnectWithoutLocationsInput>;

    @Field(() => [location_areasUpsertWithWhereUniqueWithoutLocationsInput], {nullable:true})
    @Type(() => location_areasUpsertWithWhereUniqueWithoutLocationsInput)
    upsert?: Array<location_areasUpsertWithWhereUniqueWithoutLocationsInput>;

    @Field(() => [location_areasWhereUniqueInput], {nullable:true})
    @Type(() => location_areasWhereUniqueInput)
    set?: Array<location_areasWhereUniqueInput>;

    @Field(() => [location_areasWhereUniqueInput], {nullable:true})
    @Type(() => location_areasWhereUniqueInput)
    disconnect?: Array<location_areasWhereUniqueInput>;

    @Field(() => [location_areasWhereUniqueInput], {nullable:true})
    @Type(() => location_areasWhereUniqueInput)
    delete?: Array<location_areasWhereUniqueInput>;

    @Field(() => [location_areasWhereUniqueInput], {nullable:true})
    @Type(() => location_areasWhereUniqueInput)
    connect?: Array<location_areasWhereUniqueInput>;

    @Field(() => [location_areasUpdateWithWhereUniqueWithoutLocationsInput], {nullable:true})
    @Type(() => location_areasUpdateWithWhereUniqueWithoutLocationsInput)
    update?: Array<location_areasUpdateWithWhereUniqueWithoutLocationsInput>;

    @Field(() => [location_areasUpdateManyWithWhereWithoutLocationsInput], {nullable:true})
    @Type(() => location_areasUpdateManyWithWhereWithoutLocationsInput)
    updateMany?: Array<location_areasUpdateManyWithWhereWithoutLocationsInput>;

    @Field(() => [location_areasScalarWhereInput], {nullable:true})
    @Type(() => location_areasScalarWhereInput)
    deleteMany?: Array<location_areasScalarWhereInput>;
}
