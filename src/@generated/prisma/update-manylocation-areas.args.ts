import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { location_areasUpdateManyMutationInput } from '../location-areas/location-areas-update-many-mutation.input';
import { Type } from 'class-transformer';
import { location_areasWhereInput } from '../location-areas/location-areas-where.input';

@ArgsType()
export class UpdateManylocationAreasArgs {

    @Field(() => location_areasUpdateManyMutationInput, {nullable:false})
    @Type(() => location_areasUpdateManyMutationInput)
    data!: location_areasUpdateManyMutationInput;

    @Field(() => location_areasWhereInput, {nullable:true})
    @Type(() => location_areasWhereInput)
    where?: location_areasWhereInput;
}
