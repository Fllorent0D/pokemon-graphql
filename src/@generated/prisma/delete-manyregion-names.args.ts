import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { region_namesWhereInput } from '../region-names/region-names-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyregionNamesArgs {

    @Field(() => region_namesWhereInput, {nullable:true})
    @Type(() => region_namesWhereInput)
    where?: region_namesWhereInput;
}
