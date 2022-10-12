import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { location_area_proseWhereInput } from '../location-area-prose/location-area-prose-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManylocationAreaProseArgs {

    @Field(() => location_area_proseWhereInput, {nullable:true})
    @Type(() => location_area_proseWhereInput)
    where?: location_area_proseWhereInput;
}
