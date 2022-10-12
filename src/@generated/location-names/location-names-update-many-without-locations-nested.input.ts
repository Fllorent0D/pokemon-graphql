import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_namesCreateWithoutLocationsInput } from './location-names-create-without-locations.input';
import { Type } from 'class-transformer';
import { location_namesCreateOrConnectWithoutLocationsInput } from './location-names-create-or-connect-without-locations.input';
import { location_namesUpsertWithWhereUniqueWithoutLocationsInput } from './location-names-upsert-with-where-unique-without-locations.input';
import { location_namesWhereUniqueInput } from './location-names-where-unique.input';
import { location_namesUpdateWithWhereUniqueWithoutLocationsInput } from './location-names-update-with-where-unique-without-locations.input';
import { location_namesUpdateManyWithWhereWithoutLocationsInput } from './location-names-update-many-with-where-without-locations.input';
import { location_namesScalarWhereInput } from './location-names-scalar-where.input';

@InputType()
export class location_namesUpdateManyWithoutLocationsNestedInput {

    @Field(() => [location_namesCreateWithoutLocationsInput], {nullable:true})
    @Type(() => location_namesCreateWithoutLocationsInput)
    create?: Array<location_namesCreateWithoutLocationsInput>;

    @Field(() => [location_namesCreateOrConnectWithoutLocationsInput], {nullable:true})
    @Type(() => location_namesCreateOrConnectWithoutLocationsInput)
    connectOrCreate?: Array<location_namesCreateOrConnectWithoutLocationsInput>;

    @Field(() => [location_namesUpsertWithWhereUniqueWithoutLocationsInput], {nullable:true})
    @Type(() => location_namesUpsertWithWhereUniqueWithoutLocationsInput)
    upsert?: Array<location_namesUpsertWithWhereUniqueWithoutLocationsInput>;

    @Field(() => [location_namesWhereUniqueInput], {nullable:true})
    @Type(() => location_namesWhereUniqueInput)
    set?: Array<location_namesWhereUniqueInput>;

    @Field(() => [location_namesWhereUniqueInput], {nullable:true})
    @Type(() => location_namesWhereUniqueInput)
    disconnect?: Array<location_namesWhereUniqueInput>;

    @Field(() => [location_namesWhereUniqueInput], {nullable:true})
    @Type(() => location_namesWhereUniqueInput)
    delete?: Array<location_namesWhereUniqueInput>;

    @Field(() => [location_namesWhereUniqueInput], {nullable:true})
    @Type(() => location_namesWhereUniqueInput)
    connect?: Array<location_namesWhereUniqueInput>;

    @Field(() => [location_namesUpdateWithWhereUniqueWithoutLocationsInput], {nullable:true})
    @Type(() => location_namesUpdateWithWhereUniqueWithoutLocationsInput)
    update?: Array<location_namesUpdateWithWhereUniqueWithoutLocationsInput>;

    @Field(() => [location_namesUpdateManyWithWhereWithoutLocationsInput], {nullable:true})
    @Type(() => location_namesUpdateManyWithWhereWithoutLocationsInput)
    updateMany?: Array<location_namesUpdateManyWithWhereWithoutLocationsInput>;

    @Field(() => [location_namesScalarWhereInput], {nullable:true})
    @Type(() => location_namesScalarWhereInput)
    deleteMany?: Array<location_namesScalarWhereInput>;
}
