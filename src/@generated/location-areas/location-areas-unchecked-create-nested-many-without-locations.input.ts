import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_areasCreateWithoutLocationsInput } from './location-areas-create-without-locations.input';
import { Type } from 'class-transformer';
import { location_areasCreateOrConnectWithoutLocationsInput } from './location-areas-create-or-connect-without-locations.input';
import { location_areasWhereUniqueInput } from './location-areas-where-unique.input';

@InputType()
export class location_areasUncheckedCreateNestedManyWithoutLocationsInput {

    @Field(() => [location_areasCreateWithoutLocationsInput], {nullable:true})
    @Type(() => location_areasCreateWithoutLocationsInput)
    create?: Array<location_areasCreateWithoutLocationsInput>;

    @Field(() => [location_areasCreateOrConnectWithoutLocationsInput], {nullable:true})
    @Type(() => location_areasCreateOrConnectWithoutLocationsInput)
    connectOrCreate?: Array<location_areasCreateOrConnectWithoutLocationsInput>;

    @Field(() => [location_areasWhereUniqueInput], {nullable:true})
    @Type(() => location_areasWhereUniqueInput)
    connect?: Array<location_areasWhereUniqueInput>;
}
