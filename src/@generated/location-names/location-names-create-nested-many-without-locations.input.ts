import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_namesCreateWithoutLocationsInput } from './location-names-create-without-locations.input';
import { Type } from 'class-transformer';
import { location_namesCreateOrConnectWithoutLocationsInput } from './location-names-create-or-connect-without-locations.input';
import { location_namesWhereUniqueInput } from './location-names-where-unique.input';

@InputType()
export class location_namesCreateNestedManyWithoutLocationsInput {

    @Field(() => [location_namesCreateWithoutLocationsInput], {nullable:true})
    @Type(() => location_namesCreateWithoutLocationsInput)
    create?: Array<location_namesCreateWithoutLocationsInput>;

    @Field(() => [location_namesCreateOrConnectWithoutLocationsInput], {nullable:true})
    @Type(() => location_namesCreateOrConnectWithoutLocationsInput)
    connectOrCreate?: Array<location_namesCreateOrConnectWithoutLocationsInput>;

    @Field(() => [location_namesWhereUniqueInput], {nullable:true})
    @Type(() => location_namesWhereUniqueInput)
    connect?: Array<location_namesWhereUniqueInput>;
}
