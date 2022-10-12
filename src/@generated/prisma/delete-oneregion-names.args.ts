import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { region_namesWhereUniqueInput } from '../region-names/region-names-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneregionNamesArgs {

    @Field(() => region_namesWhereUniqueInput, {nullable:false})
    @Type(() => region_namesWhereUniqueInput)
    where!: region_namesWhereUniqueInput;
}
