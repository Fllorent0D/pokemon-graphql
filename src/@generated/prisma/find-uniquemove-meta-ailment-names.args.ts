import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_meta_ailment_namesWhereUniqueInput } from '../move-meta-ailment-names/move-meta-ailment-names-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquemoveMetaAilmentNamesArgs {

    @Field(() => move_meta_ailment_namesWhereUniqueInput, {nullable:false})
    @Type(() => move_meta_ailment_namesWhereUniqueInput)
    where!: move_meta_ailment_namesWhereUniqueInput;
}
