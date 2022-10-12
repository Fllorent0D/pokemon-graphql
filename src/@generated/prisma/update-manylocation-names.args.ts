import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { location_namesUpdateManyMutationInput } from '../location-names/location-names-update-many-mutation.input';
import { Type } from 'class-transformer';
import { location_namesWhereInput } from '../location-names/location-names-where.input';

@ArgsType()
export class UpdateManylocationNamesArgs {

    @Field(() => location_namesUpdateManyMutationInput, {nullable:false})
    @Type(() => location_namesUpdateManyMutationInput)
    data!: location_namesUpdateManyMutationInput;

    @Field(() => location_namesWhereInput, {nullable:true})
    @Type(() => location_namesWhereInput)
    where?: location_namesWhereInput;
}
