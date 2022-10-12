import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { location_namesWhereUniqueInput } from '../location-names/location-names-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnelocationNamesArgs {

    @Field(() => location_namesWhereUniqueInput, {nullable:false})
    @Type(() => location_namesWhereUniqueInput)
    where!: location_namesWhereUniqueInput;
}
