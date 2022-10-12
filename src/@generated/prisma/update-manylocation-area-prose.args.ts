import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { location_area_proseUpdateManyMutationInput } from '../location-area-prose/location-area-prose-update-many-mutation.input';
import { Type } from 'class-transformer';
import { location_area_proseWhereInput } from '../location-area-prose/location-area-prose-where.input';

@ArgsType()
export class UpdateManylocationAreaProseArgs {

    @Field(() => location_area_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => location_area_proseUpdateManyMutationInput)
    data!: location_area_proseUpdateManyMutationInput;

    @Field(() => location_area_proseWhereInput, {nullable:true})
    @Type(() => location_area_proseWhereInput)
    where?: location_area_proseWhereInput;
}
