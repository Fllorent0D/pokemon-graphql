import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_meta_ailment_namesWhereInput } from '../move-meta-ailment-names/move-meta-ailment-names-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManymoveMetaAilmentNamesArgs {

    @Field(() => move_meta_ailment_namesWhereInput, {nullable:true})
    @Type(() => move_meta_ailment_namesWhereInput)
    where?: move_meta_ailment_namesWhereInput;
}
