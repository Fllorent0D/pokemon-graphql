import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { location_namesWhereInput } from '../location-names/location-names-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManylocationNamesArgs {

    @Field(() => location_namesWhereInput, {nullable:true})
    @Type(() => location_namesWhereInput)
    where?: location_namesWhereInput;
}
